import { Button } from './components/Button';

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-5">
      <Button />
      <Button disabled />
      <Button disabled isRedDisabled />
    </div>
  );
}

export default App;
