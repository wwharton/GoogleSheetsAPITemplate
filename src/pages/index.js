import { useState } from 'react'
import { useEffect } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet';

const credentials = {
  client_email: '****t@****.iam.gserviceaccount.com',
  private_key: '-----BEGIN PRIVATE KEY-----\n****\n-----END PRIVATE KEY-----\n',
};

const sheetId = '****';

export default function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    await loadGoogleSheet(setRows);
  }

  const loadGoogleSheet = async (setRows) => {
    const doc = new GoogleSpreadsheet(sheetId);
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const data = await sheet.getRows()
    setRows(data)
  };

  const Sheet = ({ rows }) => {    
    return (
      rows.map((row) => (
        row._rawData.map((data) => (
          <div>{data}</div>
        ))
      ))
    );
  };

  return (
    <>
        <h1>Data from Sheets</h1>
        <Sheet rows={rows}/>
    </>
  )
}
