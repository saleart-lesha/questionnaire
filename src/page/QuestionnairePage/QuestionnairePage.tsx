import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Questionnaire } from './model/Questionnaire'

const Section = styled.div`
  padding: 16px;
  margin: 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`

const PrewieQuestionnaire = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid;
  border-radius: 5px;
`

const Image = styled.img`
  height: 250px;
  width: 250px;
`

const Text = styled.span``

const fetchQuestionnaires = async () => {
  const { data } = await axios.get('http://localhost:3001/questionnaires')
  return data
}

const QuestionnairePage = () => {
  const { data, isLoading, isError } = useQuery('questionnaires', fetchQuestionnaires)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <Section>
      <Grid>
        {data.map((questionnaire: Questionnaire) => (
          <PrewieQuestionnaire key={questionnaire.id}>
            <Image src={questionnaire.img} />
            <Text>{questionnaire.name}</Text>
          </PrewieQuestionnaire>
        ))}
      </Grid>
    </Section>
  )
}

export default QuestionnairePage
