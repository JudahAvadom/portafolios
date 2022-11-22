import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const Dealer = [
    {
        name: "Henson Chevy Buick GMC",
        url: "https://hensoncdjr-dev.321ignition.info/inventory"
    },
    {
        name:"Hocking Valley Motors",
        url:"https://hockingvalleymotors-dev.321ignition.info/"
    },
    {
        name:"Crooza",
        url:"https://crooza-dev.321ignition.info/"
    },
    {
        name:"Jay Hatfield Autogroup",
        url:"https://jayhatfield-dev.321ignition.info/"
    },
    {
        name:"Driven Boise",
        url:"https://drivenboise-dev.321ignition.info/"
    }
]

const cars = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src="/assets/projects/cars.jpg"
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Cars Ecommerce</h2>
                    <h3>Javascript / Pug / MongoDB</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        During my work at 321Ignition company, I have made different sites for car dealers, these works have been carried out as a team, and using code patterns that allowed us to launch different sites in a short time. The following list has the different sites that I managed to create
                    </p>
                    <div className='p-4'>
                        <nav>
                            <ul>
                                {Dealer.map((e, key) => (
                                    <li
                                        key={key}
                                        className="text-xl flex hover:text-blue-500"
                                    >
                                        <RiRadioButtonFill className='pr-1' />
                                        <a href={e.url} target="_blank" rel="noreferrer">{e.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Pug
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> MongoDB
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Webpack
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> SCSS
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
}

export default cars