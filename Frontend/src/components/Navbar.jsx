//rafce
import React from 'react';
import { Link } from 'react-router';
import { PlusIcon , NotebookPenIcon} from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = ({searchTerm, setSearchTerm, onSearch, searchResults}) => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between relative'>
                {/* logo and name div */}
                <div className='flex items-start justify-around'>
                  <NotebookPenIcon className="size-8 text-[#3a3fd1] p-x-2" />
                  <h1 className='text-3xl font-bold font-lora tracking-tight text-[#3a3fd1]'>NoteFlow</h1>
                </div>

                {/* <SearchBar /> */}
                <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
                onSearch={onSearch}
                searchResults={searchResults} />
                

                 {/* create note button div */}
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className="btn btn-primary rounded-3xl color-[#3a3fd1] hover:bg-[#3639c9] border-0 flex items-center gap-2">
                    <PlusIcon className="size-5"/>   
                    <span>New Note</span>
                    </Link>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
