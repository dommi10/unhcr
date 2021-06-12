import React, { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as Yup from 'yup';

function LoginPage() {
  const [loading, setloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'username must be more than 2 characters')
      .max(50, 'username is too long')
      .required('username is required'),
    password: Yup.string()
      .min(2, 'password must be more than 2 charecters')
      .max(64, 'passwords is so long')
      .required('password is required'),
  });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const { username, password } = values;
      // do something
      if (!username) retur;
      router.replace('/');
    },
  });

  const { errors } = formik;

  console.log(errors);

  return (
    <div className='flex flex-col justify-center w-screen h-screen'>
      <div className='flex flex-col md:shadow-lg justify-center w-screen h-screen md:w-[455px] md:h-[572px] mx-auto px-6 md:px-10  md:rounded-xl md:border md:border-[#2521E4]'>
        {/* logo */}
        <div className='flex justify-center'>
          <div className='relative w-24 h-24 p-10 border rounded-full '>
            <Image
              src='/images/logo1.png'
              alt='logo'
              // width={800}
              // height={800}
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
        {/* Username */}
        <div className='mt-10'>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label
                className='base-text font-medium text-[#2521E4] md:text-base'
                htmlFor='username'
              >
                Nom d'utilisateur
              </label>
              <input
                id='username'
                className={classNames(
                  'w-full mt-2 text-sm border-2  rounded-lg md:text-base',
                  {
                    'border-[#2521E4]': !errors.username && !errorMessage,
                    'border-red-600  ': errors.username || errorMessage,
                  },
                )}
                type='text'
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <div className='mt-2 font-semibold text-red-400 base-text'>
                {(errors && errors.username) ||
                  (errorMessage && errors.username)}
              </div>
            </div>
            <div className='mt-6'>
              <label
                className=' base-text font-medium text-[#2521E4] md:text-base'
                htmlFor='password'
              >
                Mot de Passe
              </label>
              <input
                id='password'
                className={classNames(
                  'w-full mt-2 text-sm border-2  rounded-lg md:text-base',
                  {
                    'border-[#2521E4]': !errors.password && !errorMessage,
                    'border-red-600': errors.password || errorMessage,
                  },
                )}
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className='mt-2 font-semibold text-red-400 base-text'>
                {(errors && errors.password) ||
                  (errorMessage && errors.password)}
              </div>
              {errorMessage && (
                <span className='mt-2 font-semibold text-red-400 base-text'>
                  {errorMessage}
                </span>
              )}
            </div>

            <button
              disabled={errors.username || errors.password}
              type='submit'
              className={classNames(
                ' w-full py-3 base-text mt-10 font-bold text-white bg-[#2521E4] rounded-lg md:text-base focus:outline-none active:outline-none active:ring focus:ring',
                {
                  'opacity-70 cursor-not-allowed':
                    errors.username || errors.password,
                },
              )}
            >
              {errors.username || errors.password
                ? 'Loading...'
                : 'Se Connecter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
