export default function Success({founded}){
    return (
        <h1>
            {founded === 8 ? 'Başarılı' : 'Devam ediyor'}
        </h1>
    )
}