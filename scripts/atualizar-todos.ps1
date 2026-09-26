<#
.SINOPSE
  Percorre clientes/ , roda "npm ci" e "npm run build" em cada pasta de
  cliente, e grava um relatorio de resultado. Uso manual, de vez em quando
  (ex.: apos atualizar uma dependencia travada em _base e propagar pros
  clientes), nunca dentro de um hook automatico sem revisao.

.OBSERVACOES
  - So mexe em clientes/<mercado>-<nicho>-<nome>/, nunca em _base nem em demos/.
  - Nao faz commit nem push: so builda local e relata. Publicar em producao
    continua manual, por cliente (CLAUDE.md secao 12).
  - Uma pasta sem package.json e pulada com aviso, nao derruba o script.
#>

$ErrorActionPreference = 'Stop'

$raiz = Split-Path -Parent $PSScriptRoot
$pastaClientes = Join-Path $raiz 'clientes'
$dataHora = Get-Date -Format 'yyyy-MM-dd_HHmmss'
$pastaRelatorios = Join-Path $raiz 'scripts\relatorios'
New-Item -ItemType Directory -Force -Path $pastaRelatorios | Out-Null
$caminhoRelatorio = Join-Path $pastaRelatorios "atualizar-todos_$dataHora.md"

$linhasRelatorio = @()
$linhasRelatorio += "# Relatorio de atualizar-todos.ps1"
$linhasRelatorio += ""
$linhasRelatorio += "Rodado em: $dataHora"
$linhasRelatorio += ""

if (-not (Test-Path $pastaClientes)) {
    Write-Warning "Pasta clientes/ ainda nao existe em $raiz. Nada para atualizar."
    $linhasRelatorio += "Pasta clientes/ nao existe ainda. Nenhum cliente para processar."
    Set-Content -Path $caminhoRelatorio -Value $linhasRelatorio -Encoding utf8
    exit 0
}

$pastasCliente = Get-ChildItem -Path $pastaClientes -Directory -ErrorAction SilentlyContinue

if (-not $pastasCliente -or $pastasCliente.Count -eq 0) {
    Write-Output "Nenhuma pasta de cliente encontrada em $pastaClientes."
    $linhasRelatorio += "Nenhuma pasta de cliente encontrada."
    Set-Content -Path $caminhoRelatorio -Value $linhasRelatorio -Encoding utf8
    exit 0
}

$totalOk = 0
$totalFalhou = 0
$totalPulado = 0

foreach ($pasta in $pastasCliente) {
    $nomeCliente = $pasta.Name
    $caminhoPackageJson = Join-Path $pasta.FullName 'package.json'

    Write-Output "== $nomeCliente =="

    if (-not (Test-Path $caminhoPackageJson)) {
        Write-Warning "  sem package.json, pulando."
        $linhasRelatorio += "## $nomeCliente`n- Resultado: PULADO (sem package.json)`n"
        $totalPulado++
        continue
    }

    Push-Location $pasta.FullName
    try {
        Write-Output "  npm ci..."
        $saidaCi = npm ci 2>&1
        $ciOk = $?

        if (-not $ciOk) {
            Write-Warning "  npm ci falhou."
            $linhasRelatorio += "## $nomeCliente`n- Resultado: FALHOU no npm ci`n- Saida:`n``````\n$saidaCi\n```````n"
            $totalFalhou++
            continue
        }

        Write-Output "  npm run build..."
        $saidaBuild = npm run build 2>&1
        $buildOk = $?

        if ($buildOk) {
            Write-Output "  build OK."
            $linhasRelatorio += "## $nomeCliente`n- Resultado: OK`n"
            $totalOk++
        }
        else {
            Write-Warning "  build falhou."
            $linhasRelatorio += "## $nomeCliente`n- Resultado: FALHOU no npm run build`n- Saida:`n``````\n$saidaBuild\n```````n"
            $totalFalhou++
        }
    }
    finally {
        Pop-Location
    }
}

$linhasRelatorio += ""
$linhasRelatorio += "## Resumo"
$linhasRelatorio += "- OK: $totalOk"
$linhasRelatorio += "- Falhou: $totalFalhou"
$linhasRelatorio += "- Pulado: $totalPulado"

Set-Content -Path $caminhoRelatorio -Value $linhasRelatorio -Encoding utf8

Write-Output ""
Write-Output "Relatorio salvo em: $caminhoRelatorio"
Write-Output "OK: $totalOk | Falhou: $totalFalhou | Pulado: $totalPulado"

if ($totalFalhou -gt 0) {
    exit 1
}
