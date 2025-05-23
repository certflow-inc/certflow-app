export function formatDateToString(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };

  return new Intl.DateTimeFormat('pt-BR', options).format(date);
}
