import { apiClient } from '../../../../app/api/axiosInstance'
import { IQuestionnaire } from '../model/IQuestionnaire'

export const fetchQuestionnaires = async (): Promise<IQuestionnaire[]> => {
  const { data } = await apiClient.get('/questionnaires')
  return data
}
