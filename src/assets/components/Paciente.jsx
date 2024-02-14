import PropTypes from 'prop-types';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { petName, ownerName, email, dischargeDate, symptoms, id } = paciente;

  const handleEliminarPaciente = () => {
    const respuesta = confirm('¿Estás seguro de eliminar el paciente?');
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className='mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: <span className='font-normal normal-case'>{petName}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:{' '}
        <span className='font-normal normal-case'>{ownerName}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Correo Electrónico:{' '}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta:{' '}
        <span className='font-normal normal-case'>{dischargeDate}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Síntomas: <span className='font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='flex justify-between mt-10'>
        <button
          className='py-2 px-10 bg-lime-600 hover:bg-lime-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={handleEliminarPaciente}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};

export default Paciente;
