
export default function MyButton({BgColor="bg-blue-200", Text= "click", className=''})
{
    return <>
        <button className={`m-5 p-5 ${BgColor} text-white ${className}`}>{Text}</button>
    </>
}