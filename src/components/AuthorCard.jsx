import React from 'react';

const AuthorCard = ({ name, imgsrc, github, linkedin, role, mail }) => {
    return (
        <div name={name}>
            <div className="flex rounded-lg shadow-[0_0_10px_2px] shadow-zinc-400 pr-12 mb-12 transition-transform duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-white" >

                <img className='w-56  rounded-l-lg aspect-square' src={imgsrc} alt={`${name}'s avatar`} />

                <div className='flex flex-col justify-center ml-8'>
                    <span className='text-xl font-bold my-4'>{role} By :</span>

                    <span className='text-xl'>{name}</span>

                    <div className='flex'>

                        {github && (    
                            <img
                            className='w-8 cursor-pointer'
                            onClick={() => window.open(github)}
                            src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
                            alt='GitHub'
                            />
                        )}
                        <img
                        className='w-8 m-3 cursor-pointer'
                            onClick={() => window.open(linkedin)}
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png'
                            alt='LinkedIn'
                        />
                        <img
                            className='w-8 h-6 my-auto cursor-pointer'
                            onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`)}
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png'
                            alt='mail'
                        />
                    </div>

                </div>
            </div>
      </div>
    );
  };
  
  export default AuthorCard;
  