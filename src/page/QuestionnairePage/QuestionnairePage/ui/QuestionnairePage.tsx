import { IQuestionnaire } from '../model/IQuestionnaire'
import { Grid, PreviewQuestionnaire, Section, Image, Text } from './QuestionnairePageStyled'
import { Loader } from '../../../../shared/ui/Loader'
import { Center } from '../../../../shared/ui/Center'
import { Error, TextError } from '../../../../shared/ui/Error'
import bugIcon from '../../../../app/icon/bug.svg'
import { useFetchQuestionnaires } from '../hooks/useQuestionnaires'
import Searcher from '../../../../features/Searcher/ui/Searcher.tsx'
import { useQuestionnaireStore } from '../hooks/useQuestionnaireStore .ts'
import { useEffect } from 'react'

const QuestionnairePage = () => {
  const { data: questionnaires, isLoading, isError } = useFetchQuestionnaires()
  const { setQuestionnaires, filteredQuestionnaires, filterQuestionnaires, setSearchQuery } =
    useQuestionnaireStore()

  useEffect(() => {
    if (questionnaires) {
      setQuestionnaires(questionnaires)
    }
  }, [questionnaires, setQuestionnaires])

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    )
  }

  if (isError) {
    return (
      <Center>
        <Error src={bugIcon} />
        <TextError>Ошибка загрузки</TextError>
      </Center>
    )
  }

  return (
    <Section>
      <Searcher filterQuestionnaires={filterQuestionnaires} setSearchQuery={setSearchQuery} />
      <Grid>
        {filteredQuestionnaires.map(
          (questionnaire: IQuestionnaire) =>
            !questionnaire.completed && (
              <PreviewQuestionnaire key={questionnaire.id}>
                <Image src={questionnaire.img} />
                <Text>{questionnaire.name}</Text>
              </PreviewQuestionnaire>
            ),
        )}
      </Grid>
    </Section>
  )
}

export default QuestionnairePage
