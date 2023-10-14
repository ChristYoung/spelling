import './App.css';
import { MenuCard } from './components/MenuCard';
import { BsFillBrushFill } from 'react-icons/bs';

function App() {
    return (
        <div className="flex">
            <MenuCard
                title="INPUT"
                desc="You can input any words you are not familiar with."
                icon={<BsFillBrushFill />}
            />
            <MenuCard
                title="INPUT"
                desc="You can input any words you are not familiar with."
                icon={<BsFillBrushFill />}
            />
        </div>
    );
}

export default App;
