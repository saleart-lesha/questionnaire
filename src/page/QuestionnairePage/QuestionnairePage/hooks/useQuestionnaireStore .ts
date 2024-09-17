import create from 'zustand'
import { IQuestionnaire } from '../model/IQuestionnaire'

interface QuestionnaireStore {
  questionnaires: IQuestionnaire[]
  filteredQuestionnaires: IQuestionnaire[]
  searchQuery: string
  setQuestionnaires: (data: IQuestionnaire[]) => void
  setSearchQuery: (query: string) => void
  filterQuestionnaires: () => void
}

export const useQuestionnaireStore = create<QuestionnaireStore>((set, get) => {
  let searchTimeout: NodeJS.Timeout | null = null
  return {
    questionnaires: [],
    filteredQuestionnaires: [],
    searchQuery: '',
    setQuestionnaires: (data) => set({ questionnaires: data, filteredQuestionnaires: data }),
    setSearchQuery: (query: string) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout)
      }
      searchTimeout = setTimeout(() => {
        set({ searchQuery: query })
        get().filterQuestionnaires()
      }, 300)
    },
    filterQuestionnaires: () => {
      const { questionnaires, searchQuery } = get()
      const filtered = questionnaires.filter((q) =>
        q.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      set({ filteredQuestionnaires: filtered })
    },
  }
})
