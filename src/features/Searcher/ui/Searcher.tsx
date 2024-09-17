import { InputContainer, Input, Label } from './Searcher'

interface SearcherProps {
  filterQuestionnaires: () => void
  setSearchQuery: (query: string) => void
}

const Searcher = ({ filterQuestionnaires, setSearchQuery }: SearcherProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    filterQuestionnaires()
  }

  return (
    <InputContainer>
      <Input placeholder=' ' required onChange={handleSearch} />
      <Label>Поиск</Label>
    </InputContainer>
  )
}

export default Searcher
