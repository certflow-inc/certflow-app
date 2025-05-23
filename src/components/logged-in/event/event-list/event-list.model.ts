export function useEventListModel() {
  const handleDeleteEvent = async (eventId: string) => {
    console.log('Deleting event with ID:', eventId);
  };

  const handleArchiveEvent = async (eventId: string) => {
    console.log('Archiving event with ID:', eventId);
  };

  return {
    handleDeleteEvent,
    handleArchiveEvent
  };
}
