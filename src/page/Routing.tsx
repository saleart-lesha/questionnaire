import { Route, Routes } from 'react-router-dom'
import Header from '../widget/Header/Header'
import QuestionnairePage from './QuestionnairePage/QuestionnairePage'

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<QuestionnairePage />} />
      </Routes>
    </>
  )
}

export default Routing
