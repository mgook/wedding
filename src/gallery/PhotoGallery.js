import Gallery from "react-photo-gallery";

const photos = [
    {
        src: 'image/1.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'image/2.jpg',
        width: 1,
        height: 1
    }
];

export default function PhotoGallery() {
    return (
        <div>
            <Gallery photos={photos} />
            <img src="image/1.jpg" />
        </div>
    );
}

