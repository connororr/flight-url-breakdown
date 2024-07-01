
export default function Home() {
  return (
      <main className="flex flex-col items-center">
        <h1 className="font-extrabold">Get Different Flight Combinations Fast!</h1>
          <div className="url-submission-container flex-row">
              <input placeholder="htttp://skyscanner.com/..."/>
              <button>Get combinations</button>
          </div>
      </main>
  );
}
