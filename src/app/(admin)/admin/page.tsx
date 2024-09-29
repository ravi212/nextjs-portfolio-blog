import Dashboard from '@/components/molecules/admin/dashboard'
import { getAllMessages } from '@/lib/actions/message.action'
import { revalidatePath } from 'next/cache';

const Page = async () => {
  
  const messages = (await getAllMessages()).messages;
  revalidatePath('(admin)/admin', 'page')

  return (
    <Dashboard messages={messages} />
  )
}

export default Page