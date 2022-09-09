export default function ReportTable({ stands }) {
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    if (stands.length === 0) {
        return <h2 className="text-2xl">No Cookie Stands Available</h2>
    } else {
        return (
            <table className='w-2/3 rounded-md bg-emerald-500'>
                <thead>
                    <tr>
                        <th>Location</th>
                        {hours.map(hour => <th>{hour}</th>)}
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody className='border border-gray-600'>
                    {stands.map(stand => (
                        <tr key={stand.id} className='even:bg-emerald-300 odd:bg-emerald-400 '>
                            <td className='pl-4 border border-gray-600'>{stand.location}</td>
                            {stand.hourlySales.map(sales => <td className='text-center border border-gray-600'>{sales}</td>)}
                            <td className='text-center border border-gray-600'>516</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='border border-gray-600'>
                    <tr className='font-bold text-center border border-gray-600'>
                        <td>Totals</td>
                        {stands[0].hourlySales.map(sales => <td className='border border-gray-600'>{sales * stands.length}</td>)}
                        <td>{516 * stands.length}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}