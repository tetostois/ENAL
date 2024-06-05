// // eslint-disable-next-line no-unused-vars
// import React from 'react'

// const Register = () => {
//     return (
//         <div className='max-w-lg mx-auto mt-10 bg-rose-50'>
//             <h1 className='flex items-center p-3 text-3xl font-semibold text-center'>S`enregistrer</h1>
//             <div className='flex gap-4 mb-4'>
//                 <input type='text' placeholder='Nom' />
//                 <input type='text' placeholder='Prenom' />
//             </div>
//             <div className='flex flex-col gap-4 mb-4'>
//                 <input type='text' placeholder='email' />
//                 <input type='text' placeholder='dateNaissance' />
//             </div>
//             <div className='flex gap-4 mb-4'>
//                 <input type='text' placeholder='password' />
//                 <input type='text' placeholder='telephone' />
//             </div>
//             <div className='flex gap-4 mb-4'>
//                 <input type='text' placeholder='lieuNaissance' />
//                 <input type='text' placeholder='regionResidence' />
//             </div>
//             <div className='flex gap-4 mb-4'>
//                 <input type='text' placeholder='etablissement' />
//                 <input type='text' placeholder='niveau' />
//             </div>
//             <div className='flex gap-4 mb-4'>
//                 <input type='text' placeholder='filiere' />
//                 <input type='text' placeholder='numeroMatricule' />
//             </div>
//             <div className='flex justify-center gap-4 mb-4'>
//                 <button className='bg-stone-700'>S`enregistrer</button>
//             </div>


//         </div>
//     )
// }

// export default Register


// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='max-w-lg p-6 mx-auto mt-10 rounded-lg bg-rose-50'>
            <h1 className='mb-6 text-3xl font-semibold text-center'>S`enregistrer</h1>
            <form className='flex flex-col gap-4'>
                <div className='flex flex-row gap-4 mb-4'>
                    <input type='text' placeholder='Nom' id='nom' className='p-2 px-8 border rounded-md' />
                    <input type='text' placeholder='Prenom' id='prenom' className='p-2 border rounded-md' />
                </div>
                <div className='flex flex-col gap-4 mb-4'>
                    <input type='text' placeholder='Email' className='p-2 border rounded-md' id='email' />
                    <input type='text' placeholder='Date de naissance' id='date de naissance' className='p-2 border rounded-md' />
                </div>
                <div className='flex flex-row gap-4 mb-4'>
                    <input type='password' placeholder='Mot de passe' id='mot de passe' className='p-2 px-8 border rounded-md' />
                    <input type='text' placeholder='Téléphone' id='telephone' className='p-2 border rounded-md' />
                </div>
                <div className='flex flex-col gap-4 mb-4'>
                    <input type='text' placeholder='Lieu de naissance' id='lieu de naissance' className='p-2 border rounded-md' />
                    <input type='text' placeholder='Région de résidence' id='region de residence' className='p-2 border rounded-md' />
                </div>
                <div className='flex flex-row gap-4 mb-4'>
                    <input type='text' placeholder='Établissement' id='établissement' className='p-2 px-8 border rounded-md' />
                    <input type='text' placeholder='Niveau d`études' id='niveay d`étude' className='p-2 border rounded-md' />
                </div>
                <div className='flex flex-row gap-4 mb-4'>
                    <input type='text' placeholder='Filière' id='filière' className='p-2 px-8 border rounded-md' />
                    <input type='text' placeholder='Numéro de matricule' id='numéro de matricule' className='p-2 border rounded-md' />
                </div>
                <div className='flex flex-col justify-center gap-4 mb-4 uppercase hover:opacity-95 disabled:opacity-85'>
                    <button className='p-2 text-white rounded-md bg-stone-700'>S`enregistrer</button>
                </div>
                <div className='flex gap-3 mt-3'>
                    <p>Avez-vous déja un compte?</p> 
                    <span className=''><Link to='/connexion' className='text-blue-700'> Connectez-vous</Link></span>
                </div>
            </form>
        </div>
    );
};

export default Register;
