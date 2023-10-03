import React, { useState } from 'react';
import axios from 'axios';
import IndexNavbar from "components/Navbars/AdminNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import "./conseptadmin.css"

function ConceptForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [feature, setFeature] = useState('');
  const [message, setMessage] = useState('');


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiUrl = 'https://localhost:7203/api/Concept/add';

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Image', image);
    formData.append('Feacure', feature);

    axios.post(apiUrl, formData)
      .then((response) => {
        // Başarılı yanıtı işleyin
        console.log(response.data);

        // API'den gelen mesajı göstermek için alert kullanın
        setMessage('Konsept başarıyla eklendi');

        // Formu temizleyin veya başka bir işlem yapabilirsiniz
        setName('');
        setImage(null);
        setFeature('');
      })
      .catch((error) => {
        // Hata durumunda işlem yapın
        console.error('Hata:', error);
        setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
      });
  };

  return (
    <>
     <IndexNavbar />
     <div className='conseptadd'>
     <div className="container">
       <div className="row">
         <div className="col-md-6 offset-md-3">
           <h2 className="text-center">Concept Form</h2>
           {message && <div className="alert alert-success">{message}</div>}
           <form onSubmit={handleSubmit}>
             <div className="form-group">
               <label>Name:</label>
               <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
             </div>
             <div className="form-group">
               <label>Image:</label>
               <input type="file" className="form-control-file" accept="image/*" onChange={handleImageChange} />
             </div>
             <div className="form-group">
               <label>Feature:</label>
               <input type="text" className="form-control" value={feature} onChange={(e) => setFeature(e.target.value)} />
             </div>
             <button type="submit" className="btn btn-primary">Submit</button>
           </form>
         </div>
       </div>
     </div>
     </div>
     <DemoFooter />
    </>
  );
}

export default ConceptForm;
