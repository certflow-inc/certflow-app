export function formatCurrency({
  value,
  removeSymbol = false
}: {
  value: number;
  removeSymbol?: boolean;
}) {
  const formattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol'
  }).format(value);

  return removeSymbol ? formattedValue.replaceAll('R$', '') : formattedValue;
}
