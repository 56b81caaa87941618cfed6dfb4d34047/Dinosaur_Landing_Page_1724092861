/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1724092864", {
    template: `
    <section id="cta-section-container" style="min-height: 510px" >
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="bg-purple-500 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-purple-400">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" class="#A855F7" /><stop offset="100%" class="6366F1" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-purple-500 to-purple-200">Roar into Adventure with Dinosaurs</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"> Explore the Prehistoric World</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-slate-400">Journey back in time and discover the fascinating realm of dinosaurs. From towering T-Rexes to majestic Brachiosaurus, our interactive experience brings these ancient creatures to life.</p></div>
                    <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dinosaur_Landing_Page_1724092861/main/images/bdecf2bad48e4177a5cfd6afa1fd5c91.jpeg" alt="Dinosaur Adventure" class="mb-8 mx-auto rounded-lg" />
                    <form @submit.prevent="submitForm" class="mb-8">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <input v-model="email" type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                            <button type="submit" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">Chat with Dino</button>
                        </div>
                    </form>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
    data() {
        return {
            expanded: false,
            tab: null,
            email: '',
        };
    },
    methods: {
        // Start of submitForm method
        submitForm() {
            // Here you would typically send the email to your backend
            console.log('Form submitted with email:', this.email);
            // Reset the form
            this.email = '';
        }
        // End of submitForm method
    },
    });
