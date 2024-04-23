import { navigate } from '../Link.jsx'

export default function Welcome() {
return (
<div>
    <h1>Benvinguts</h1>
    <button onClick={()=> navigate('/pressupostos')}>Pressupostos</button>
</div>
)
}