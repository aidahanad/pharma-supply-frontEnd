import {medicaments} from'./../../assets/data/medicaments'
import MedicamentCard from './MedicamentCard';

const MedicamentList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

        
        {medicaments.map(medicament=> (
        <MedicamentCard key={medicament.id} medicament={medicament}/>
        ))}
        
        </div>
  )
}
export default MedicamentList;