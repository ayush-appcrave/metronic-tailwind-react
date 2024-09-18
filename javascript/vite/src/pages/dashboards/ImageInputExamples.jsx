import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '@/components/container';
import { ImageInput } from '@/components/image-input';
const ImageInputExamples = () => {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const onChange1 = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages1(imageList);
  };
  const onChange2 = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages2(imageList);
  };
  const onChange3 = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages3(imageList);
  };
  return <>
      <Helmet>
        <title>Image Input Examples</title>
      </Helmet>

      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-2xl font-bold text-gray-900">Basic upload example</h2>
            <ImageInput value={images1} onChange={onChange1}>
              {({
              imageList,
              onImageUpload,
              onImageRemove
            }) => <>
                  <button onClick={onImageUpload} className="btn btn-primary">
                    Change image
                  </button>
                  {imageList.map((image, index) => <div key={index}>
                      <img src={image.dataURL} />
                      <div>
                        <button className="btn btn-danger" onClick={() => {
                    onImageRemove(index);
                  }}>
                          Remove
                        </button>
                      </div>
                    </div>)}
                </>}
            </ImageInput>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-2xl font-bold text-gray-900">Multiple image upload example</h2>
            <ImageInput value={images2} onChange={onChange2} multiple>
              {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              onImageRemoveAll
            }) => <>
                  <div className="flex">
                    <button onClick={onImageUpload} className="btn btn-primary">
                      Change image
                    </button>
                    <button onClick={onImageRemoveAll} className="btn btn-danger">
                      Remove all
                    </button>
                  </div>
                  {imageList.map((image, index) => <div key={index}>
                      <img src={image.dataURL} />
                      <div>
                        <button className="btn btn-success" onClick={() => {
                    onImageUpdate(index);
                  }}>
                          Update
                        </button>
                        <button className="btn btn-danger" onClick={() => {
                    onImageRemove(index);
                  }}>
                          Remove
                        </button>
                      </div>
                    </div>)}
                </>}
            </ImageInput>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-2xl font-bold text-gray-900">Drag and drop</h2>
            <ImageInput value={images3} onChange={onChange3}>
              {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              dragProps
            }) => <>
                  <div className="btn btn-light justify-between h-auto py-3 lg:py-5 px-3 lg:px-6 group" onClick={imageList.length === 0 ? onImageUpload : () => {}} {...imageList.length === 0 ? dragProps : {}}>
                    {imageList.length === 0 ? 'Drag and drop your image here' : <div>
                        <img src={imageList[0].dataURL} />
                        <button className="btn btn-success" onClick={() => {
                    onImageUpdate(0);
                  }}>
                          Update
                        </button>
                        <button className="btn btn-danger" onClick={() => {
                    onImageRemove(0);
                  }}>
                          Remove
                        </button>
                      </div>}
                  </div>
                </>}
            </ImageInput>
          </div>
        </div>
      </Container>
    </>;
};
export { ImageInputExamples };