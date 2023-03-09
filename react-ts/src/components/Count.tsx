type AppProps = {
  count: number | null
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const Count = ({ count, setCount }: AppProps) => {
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Count