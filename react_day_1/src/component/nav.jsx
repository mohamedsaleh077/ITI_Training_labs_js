import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Mynav()
{
    return <>
        <nav className='flex justify-between p-4'>
            <h2 className='font-bold'>NEWHOME</h2>
            <div>
                <a href="#" className='ml-10'>HOME</a>
                <a href="#" className='ml-10'>ABOUT</a>
                <a href="#" className='ml-10'>FURNITURE</a>
                <a href="#" className='ml-10'>BLOG</a>
                <a href="#" className='ml-10'>CONTACT US</a>
            </div>
            <div>
                <a href="#" className='ml-6'>LOGIN <FontAwesomeIcon icon={faUser} /></a>
                <a href="#" className='ml-6'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            </div>
        </nav>
    </>;
}