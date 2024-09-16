import { IQuestionnaire } from '../model/IQuestionnaire'
import { Grid, PreviewQuestionnaire, Section, Image, Text } from './QuestionnairePageStyled'
import { Loader } from '../../../../shared/ui/Loader'
import { Center } from '../../../../shared/ui/Center'
import { Error, TextError } from '../../../../shared/ui/Error'
import bugIcon from '../../../../app/icon/bug.svg'
import { useFetchQuestionnaires } from '../hooks/useQuestionnaires'

const QuestionnairePage = () => {
  const { data: questionnaires, isLoading, isError } = useFetchQuestionnaires()

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
      <Grid>
        {questionnaires &&
          questionnaires.map((questionnaire: IQuestionnaire) => (
            <>
              {!questionnaire.completed && (
                <PreviewQuestionnaire key={questionnaire.id}>
                  <Image src={questionnaire.img} />
                  <Text>{questionnaire.name}</Text>
                </PreviewQuestionnaire>
              )}
            </>
          ))}
      </Grid>
    </Section>
  )
}

export default QuestionnairePage
