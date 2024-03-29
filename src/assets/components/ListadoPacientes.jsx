import Paciente from './Paciente';
import PropTypes from 'prop-types';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes?.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>listado pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus{' '}
            <span className='text-lime-600 font-bold '>Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando pacientes{' '}
            <span className='text-lime-600 font-bold '>
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};

export default ListadoPacientes;
