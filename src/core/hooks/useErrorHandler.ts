export const useErrorHandler = () => {
  const handleError = (error: unknown) => {
    console.error('Une erreur est survenue:', error)
    // Ici vous pouvez ajouter votre logique de gestion d'erreur
    // Par exemple : notification, logging, etc.
  }

  return { handleError }
} 