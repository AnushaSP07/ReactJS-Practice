function Content() {

    const handleNameChange = () =>{
        const names = ['Bob','Kevin','Joe'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }
    return (
        <main>
           Hello {handleNameChange()}!!
        </main>
    )
}

export default Content
