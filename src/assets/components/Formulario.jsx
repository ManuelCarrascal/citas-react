import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alerta from './Alerta';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [dischargeDate, setDischargeDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setPetName(paciente.petName);
      setOwnerName(paciente.ownerName);
      setEmail(paciente.email);
      setDischargeDate(paciente.dischargeDate);
      setSymptoms(paciente.symptoms);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar formulario
    if ([petName, ownerName, email, dischargeDate, symptoms].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    //Crear objeto con los datos del formulario
    const objetoPaciente = {
      petName,
      ownerName,
      email,
      dischargeDate,
      symptoms,
    };

    if (paciente.id) {
      //Editar paciente
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);

      setPaciente({});
    } else {
      //Nuevo paciente
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setPetName('');
    setOwnerName('');
    setEmail('');
    setDischargeDate('');
    setSymptoms('');
  };
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Añade Pacientes y{' '}
        <span className='text-lime-600 font-bold'>Administralos</span>
      </p>
      <form
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'
        action=''
        onSubmit={handleSubmit}
      >
        {error && <Alerta mensaje='Todos los campos son obligatorios' />}
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='petName'
          >
            Nombre Mascota
          </label>
          <input
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='petName'
            placeholder='Nombre de la mascota'
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='ownerName'
          >
            Nombre Propietario
          </label>
          <input
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='ownerName'
            placeholder='Nombre del propietario'
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='email'
          >
            Correo Electrónico
          </label>
          <input
            type='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='email'
            placeholder='Correo electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='dischargeDate'
          >
            Fecha de Alta
          </label>
          <input
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='dischargeDate'
            value={dischargeDate}
            onChange={(e) => setDischargeDate(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='symptoms'
          >
            Síntomas
          </label>
          <textarea
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='symptoms'
            placeholder='Descripción de los síntomas'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-lime-600 w-full p-3 text-white uppercase font-bold hover:bg-lime-700 cursor-pointer transition-all duration-300'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  setPacientes: PropTypes.func.isRequired,
  pacientes: PropTypes.array.isRequired,
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
};

export default Formulario;
