import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='m-64 items-center text-center'>
            <h2>Not Found</h2>

            <Button variant='ghost' className="p-8 mt-12 text-4xl ">
                <Link href="/" className='underline text-3xl'>Return Home </Link> &rarr;
            </Button>


        </div>
    )
}