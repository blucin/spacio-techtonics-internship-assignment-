class Slideshow {
    constructor(container) {
        this.container = container;
        this.currentIndex = 0;
        this.totalSlides = 4; // We have 4 images
        this.img = container.querySelector('img');
        this.prevBtn = container.querySelector('.prev');
        this.nextBtn = container.querySelector('.next');
        this.projectName = container.querySelector('.project-name');
        
        this.projectNames = [
            'COMMERCIAL PROJECT',
            'RESIDENTIAL TOWER',
            'OFFICE COMPLEX',
            'SHOPPING MALL'
        ];
        
        this.setupEventListeners();
        this.updateSlide(); // Initialize first slide
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));
    }

    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.totalSlides) % this.totalSlides;
        this.updateSlide();
    }

    updateSlide() {
        const imageNumber = this.currentIndex + 1;
        this.img.src = `./assets/slideshow/${imageNumber}.jpg`;
        if (this.projectName) {
            this.projectName.textContent = this.projectNames[this.currentIndex];
        }
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const workItem = document.querySelector('.work-item');
    if (workItem) new Slideshow(workItem);
});
