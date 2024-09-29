import Messages from '@/components/molecules/admin/messages';
import { getAllMessages } from '@/lib/actions/message.action';
import { revalidatePath } from 'next/cache';

const page = async () => {
  
  const messages = (await getAllMessages()).messages;
  revalidatePath('(admin)/admin/message', 'page')

  return (
    <>
    <div className='py-6 flex justify-between items-center'>
      <h3 className="text-2xl font-medium">Messages</h3>
    </div>
    <Messages messages={messages} />
    </>
  )
}

export default page