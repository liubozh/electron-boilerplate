import { MinusIcon, SquareIcon, Cross2Icon } from '@radix-ui/react-icons';

export default function TitleBar() {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white h-8 px-2 select-none">
      <div className="drag flex items-center flex-1 -ml-2">
        {/* <img src="/app-icon.png" alt="App Icon" className="w-4 h-4 mr-2" /> */}
        <span className="text-sm font-semibold">Electron Boilerplate</span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={window.electronAPI.minimize}
          className="p-1 hover:bg-gray-700 rounded-sm focus:outline-none"
          aria-label="Minimize"
        >
          <MinusIcon className="w-3 h-3" />
        </button>
        <button
          onClick={window.electronAPI.maximize}
          className="p-1 hover:bg-gray-700 rounded-sm focus:outline-none"
          aria-label="Maximize"
        >
          <SquareIcon className="w-3 h-3" />
        </button>
        <button
          onClick={window.electronAPI.close}
          className="p-1 hover:bg-red-600 rounded-sm focus:outline-none"
          aria-label="Close"
        >
          <Cross2Icon className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
