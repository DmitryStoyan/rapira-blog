export function getCommentWord(count: number): string {
  if (count === 1) return 'комментарий'
  if (count >= 2 && count <= 4) return 'комментария'
  return 'комментариев'
}
