import React , { useState, useEffect} from 'react';
import AWS from 'aws-sdk';

export default function AdminPDF() {

	const S3_BUCKET = 'automanix';
	const REGION = process.env.REACT_APP_AWS_REGION;

	AWS.config.update({
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_ID,
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
	})

	const myBucket = new AWS.S3({
		params: { Bucket: S3_BUCKET },
		region: REGION,
	})

	const [progress, setProgress] = useState(0);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileInput = (e) => {
		setSelectedFile(e.target.files[0]);
	}

	const uploadFile = (file) => {
		const params = {
			ACL: 'public-read',
			Body: file,
			Bucket: S3_BUCKET,
			Key: file.name,
			ContentDisposition:"inline",
        	ContentType:"application/pdf"
		};
		myBucket.putObject(params)
			.on('httpUploadProgress', (evt) => {
				setProgress(Math.round((evt.loaded / evt.total)*100))
			})
			.send((err) => { 
				if(err) console.log(err) 
				else { alert('업로드되었습니다') }
			})
	}

  return (
    <div>
			<section className="page-section bg-light" id="portfolio">
				<div className="container">
					<div className="text-center">
          	<h2 className="section-heading-po" >PDF업로드하는공간</h2>
          	<h3 className="section-subheading-subpo">pdf파일을 이름형식에 맞춰서 업로드해주세요</h3>
        	</div>
					<div className="row">
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput} /><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day01.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day02.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day03.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day04.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day05.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day06.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day07.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day08.pdf 업로드하기</button>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<input type='file' onChange={handleFileInput}/><br></br>
							<button className="btn btn-success btn-xl" onClick={() => uploadFile(selectedFile)}>day09.pdf 업로드하기</button>
						</div>					
					</div>
				</div>
			</section>
    </div>
  )
}