import { useQuery } from 'react-query'
import { fetchQuestionnaires } from '../api/QuestionnaireApi'

export const useFetchQuestionnaires = () => {
  return useQuery(['questionnaires'], fetchQuestionnaires)
}
