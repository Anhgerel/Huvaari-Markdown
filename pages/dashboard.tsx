import PageTitle from '@components/PageTitle'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
  return (
    <div className='mt-24 text-center'>
      <PageTitle>
        Under Construction{' '}
        <span role='img' aria-label='roadwork sign'>
          🚧
        </span>
      </PageTitle>
    </div>
  )
}

export default Dashboard
