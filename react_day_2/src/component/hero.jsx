import myImage from '../assets/img.webp'
import MyButton from './button';

export default function HeroSection() {
  return (
    <>
      <header  className='bg-bgbg-blue flex m-10 justify-between h-150 items-center'>
        <div className='m-5'>
          <h1 className='font-bold text-4xl m-5'>
            FOR ALL YOUR
            <br/>
            FURNITURE NEEDS
          </h1>
          <p className='m-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            deserunt quo voluptate dolores molestias ex nobis soluta, eos
            inventore quidem mollitia vel libero magni sint, quae ipsa
            accusantium. Dolore, sapiente.
          </p>
          <MyButton className="w-50" BgColor="bg-orange-500" Text="Contact us" />
          <MyButton className="w-50" BgColor="bg-blue-600" Text="About us" />
        </div>
        <img src={myImage} alt="Hero Image" className='w-150 m-5 h-100'/>
      </header>
    </>
  );
}
