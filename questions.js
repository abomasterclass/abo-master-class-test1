// ABO Master Class Digital Practice Test Question Bank
const questionData = [
    // Ametropia/Ophthalmic Optics (16%)
    {
        id: 1,
        text: "Which of the following terms refers to the measurement of the curvature of the front surface of a lens?",
        options: [
            { id: "A", text: "Base curve" },
            { id: "B", text: "Vertex power" },
            { id: "C", text: "Prismatic effect" },
            { id: "D", text: "Pantoscopic tilt" }
        ],
        correctAnswer: "A",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    {
        id: 2,
        text: "What is the primary function of anti-reflective coating on eyeglass lenses?",
        options: [
            { id: "A", text: "To protect against UV radiation" },
            { id: "B", text: "To reduce glare and increase light transmission" },
            { id: "C", text: "To prevent scratches on the lens surface" },
            { id: "D", text: "To filter blue light from digital devices" }
        ],
        correctAnswer: "B",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    {
        id: 3,
        text: "A patient with a prescription of -2.00D sphere in both eyes would be classified as having:",
        options: [
            { id: "A", text: "Hyperopia" },
            { id: "B", text: "Myopia" },
            { id: "C", text: "Emmetropia" },
            { id: "D", text: "Presbyopia" }
        ],
        correctAnswer: "B",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    {
        id: 4,
        text: "Which of the following best describes the optical principle of accommodation?",
        options: [
            { id: "A", text: "The ability of the eye to change focus from distance to near" },
            { id: "B", text: "The ability to adapt to different lighting conditions" },
            { id: "C", text: "The process of aligning both eyes to focus on the same object" },
            { id: "D", text: "The adjustment of pupil size in response to light" }
        ],
        correctAnswer: "A",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    {
        id: 5,
        text: "A patient with a prescription of +1.50 -0.75 x 180 has:",
        options: [
            { id: "A", text: "Simple myopic astigmatism" },
            { id: "B", text: "Simple hyperopic astigmatism" },
            { id: "C", text: "Compound myopic astigmatism" },
            { id: "D", text: "Compound hyperopic astigmatism" }
        ],
        correctAnswer: "D",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    {
        id: 6,
        text: "What is the vertex distance?",
        options: [
            { id: "A", text: "The distance from the cornea to the retina" },
            { id: "B", text: "The distance from the back surface of a lens to the cornea" },
            { id: "C", text: "The distance from the front surface of a lens to the cornea" },
            { id: "D", text: "The distance between the optical centers of both lenses" }
        ],
        correctAnswer: "C",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    {
        id: 7,
        text: "Which of the following lens materials has the highest index of refraction?",
        options: [
            { id: "A", text: "CR-39" },
            { id: "B", text: "Crown glass" },
            { id: "C", text: "Polycarbonate" },
            { id: "D", text: "1.74 high-index" }
        ],
        correctAnswer: "D",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    {
        id: 8,
        text: "What is the effect of increasing the base curve of a lens?",
        options: [
            { id: "A", text: "Decreases lens thickness" },
            { id: "B", text: "Increases magnification" },
            { id: "C", text: "Decreases peripheral distortion" },
            { id: "D", text: "Increases lens weight" }
        ],
        correctAnswer: "B",
        domain: 1 // Ametropia/Ophthalmic Optics
    },
    
    // Binocular Vision/Ocular Motility
    {
        id: 9,
        text: "Which of the following is NOT a symptom of binocular vision dysfunction?",
        options: [
            { id: "A", text: "Headaches" },
            { id: "B", text: "Double vision" },
            { id: "C", text: "Floaters" },
            { id: "D", text: "Eye strain" }
        ],
        correctAnswer: "C",
        domain: 2 // Binocular Vision/Ocular Motility
    },
    {
        id: 10,
        text: "What is the primary purpose of vergence eye movements?",
        options: [
            { id: "A", text: "To track moving objects" },
            { id: "B", text: "To maintain single binocular vision at different distances" },
            { id: "C", text: "To adjust pupil size" },
            { id: "D", text: "To scan a stationary scene" }
        ],
        correctAnswer: "B",
        domain: 2 // Binocular Vision/Ocular Motility
    },
    {
        id: 11,
        text: "A patient with esophoria would most likely experience symptoms when:",
        options: [
            { id: "A", text: "Looking at distant objects" },
            { id: "B", text: "Looking at near objects" },
            { id: "C", text: "In bright lighting conditions" },
            { id: "D", text: "During rapid eye movements" }
        ],
        correctAnswer: "B",
        domain: 2 // Binocular Vision/Ocular Motility
    },
    {
        id: 12,
        text: "Which of the following tests is used to measure stereopsis?",
        options: [
            { id: "A", text: "Worth 4-dot test" },
            { id: "B", text: "Randot stereo test" },
            { id: "C", text: "Cover test" },
            { id: "D", text: "Maddox rod test" }
        ],
        correctAnswer: "B",
        domain: 2 // Binocular Vision/Ocular Motility
    },
    
    // Ocular Disease
    {
        id: 13,
        text: "Which of the following is a risk factor for primary open-angle glaucoma?",
        options: [
            { id: "A", text: "Young age" },
            { id: "B", text: "Low intraocular pressure" },
            { id: "C", text: "Family history of glaucoma" },
            { id: "D", text: "Hyperopia" }
        ],
        correctAnswer: "C",
        domain: 3 // Ocular Disease
    },
    {
        id: 14,
        text: "What is the most common cause of blindness in individuals over 65 years of age in developed countries?",
        options: [
            { id: "A", text: "Cataracts" },
            { id: "B", text: "Glaucoma" },
            { id: "C", text: "Age-related macular degeneration" },
            { id: "D", text: "Diabetic retinopathy" }
        ],
        correctAnswer: "C",
        domain: 3 // Ocular Disease
    },
    {
        id: 15,
        text: "Which of the following is NOT a typical finding in diabetic retinopathy?",
        options: [
            { id: "A", text: "Microaneurysms" },
            { id: "B", text: "Cotton wool spots" },
            { id: "C", text: "Drusen" },
            { id: "D", text: "Neovascularization" }
        ],
        correctAnswer: "C",
        domain: 3 // Ocular Disease
    },
    {
        id: 16,
        text: "A patient presents with sudden onset of flashes and floaters. What is the most concerning potential diagnosis?",
        options: [
            { id: "A", text: "Posterior vitreous detachment" },
            { id: "B", text: "Retinal detachment" },
            { id: "C", text: "Migraine with aura" },
            { id: "D", text: "Central serous chorioretinopathy" }
        ],
        correctAnswer: "B",
        domain: 3 // Ocular Disease
    },
    
    // Systemic Disease
    {
        id: 17,
        text: "Which systemic condition is most commonly associated with anterior uveitis?",
        options: [
            { id: "A", text: "Diabetes mellitus" },
            { id: "B", text: "Hypertension" },
            { id: "C", text: "Ankylosing spondylitis" },
            { id: "D", text: "Hyperthyroidism" }
        ],
        correctAnswer: "C",
        domain: 4 // Systemic Disease
    },
    {
        id: 18,
        text: "Which of the following medications is most likely to cause dry eye symptoms?",
        options: [
            { id: "A", text: "Antihistamines" },
            { id: "B", text: "Antibiotics" },
            { id: "C", text: "NSAIDs" },
            { id: "D", text: "Vitamin supplements" }
        ],
        correctAnswer: "A",
        domain: 4 // Systemic Disease
    },
    {
        id: 19,
        text: "A patient with Graves' disease may present with which of the following ocular findings?",
        options: [
            { id: "A", text: "Miosis" },
            { id: "B", text: "Proptosis" },
            { id: "C", text: "Constricted visual fields" },
            { id: "D", text: "Decreased intraocular pressure" }
        ],
        correctAnswer: "B",
        domain: 4 // Systemic Disease
    },
    {
        id: 20,
        text: "Which of the following systemic conditions is associated with optic neuritis?",
        options: [
            { id: "A", text: "Rheumatoid arthritis" },
            { id: "B", text: "Multiple sclerosis" },
            { id: "C", text: "Crohn's disease" },
            { id: "D", text: "Parkinson's disease" }
        ],
        correctAnswer: "B",
        domain: 4 // Systemic Disease
    },
    
    // Contact Lenses
    {
        id: 21,
        text: "Which of the following contact lens materials has the highest oxygen permeability (Dk)?",
        options: [
            { id: "A", text: "HEMA" },
            { id: "B", text: "Silicone hydrogel" },
            { id: "C", text: "PMMA" },
            { id: "D", text: "Low-water content hydrogel" }
        ],
        correctAnswer: "B",
        domain: 5 // Contact Lenses
    },
    {
        id: 22,
        text: "What is the most common complication of extended wear contact lenses?",
        options: [
            { id: "A", text: "Corneal neovascularization" },
            { id: "B", text: "Microbial keratitis" },
            { id: "C", text: "Giant papillary conjunctivitis" },
            { id: "D", text: "Contact lens-induced dry eye" }
        ],
        correctAnswer: "B",
        domain: 5 // Contact Lenses
    },
    {
        id: 23,
        text: "Which of the following is NOT a sign of contact lens overwear?",
        options: [
            { id: "A", text: "Corneal edema" },
            { id: "B", text: "Limbal hyperemia" },
            { id: "C", text: "Corneal neovascularization" },
            { id: "D", text: "Increased tear break-up time" }
        ],
        correctAnswer: "D",
        domain: 5 // Contact Lenses
    },
    {
        id: 24,
        text: "What is the primary advantage of daily disposable contact lenses?",
        options: [
            { id: "A", text: "Lower cost" },
            { id: "B", text: "Higher oxygen permeability" },
            { id: "C", text: "Reduced risk of infection" },
            { id: "D", text: "Better visual acuity" }
        ],
        correctAnswer: "C",
        domain: 5 // Contact Lenses
    },
    
    // Refractive Management/Functional Vision
    {
        id: 25,
        text: "Which of the following refractive surgeries involves creating a corneal flap?",
        options: [
            { id: "A", text: "PRK" },
            { id: "B", text: "LASIK" },
            { id: "C", text: "SMILE" },
            { id: "D", text: "RK" }
        ],
        correctAnswer: "B",
        domain: 6 // Refractive Management/Functional Vision
    },
    {
        id: 26,
        text: "A patient with a prescription of -5.00D is considering refractive surgery. Which of the following is a potential concern?",
        options: [
            { id: "A", text: "Insufficient corneal thickness" },
            { id: "B", text: "Increased risk of retinal detachment" },
            { id: "C", text: "Both A and B" },
            { id: "D", text: "Neither A nor B" }
        ],
        correctAnswer: "C",
        domain: 6 // Refractive Management/Functional Vision
    },
    {
        id: 27,
        text: "What is the primary goal of vision therapy for convergence insufficiency?",
        options: [
            { id: "A", text: "To improve visual acuity" },
            { id: "B", text: "To strengthen the extraocular muscles" },
            { id: "C", text: "To enhance vergence ability" },
            { id: "D", text: "To correct refractive error" }
        ],
        correctAnswer: "C",
        domain: 6 // Refractive Management/Functional Vision
    },
    {
        id: 28,
        text: "Which of the following is NOT a typical symptom of computer vision syndrome?",
        options: [
            { id: "A", text: "Dry eyes" },
            { id: "B", text: "Headaches" },
            { id: "C", text: "Photophobia" },
            { id: "D", text: "Neck pain" }
        ],
        correctAnswer: "C",
        domain: 6 // Refractive Management/Functional Vision
    },
    
    // Low Vision Rehabilitation
    {
        id: 29,
        text: "Which of the following conditions is LEAST likely to benefit from low vision rehabilitation?",
        options: [
            { id: "A", text: "Age-related macular degeneration" },
            { id: "B", text: "Diabetic retinopathy" },
            { id: "C", text: "Retinitis pigmentosa" },
            { id: "D", text: "Uncorrected refractive error" }
        ],
        correctAnswer: "D",
        domain: 7 // Low Vision Rehabilitation
    },
    {
        id: 30,
        text: "Which of the following low vision devices would be most appropriate for a patient with central vision loss who wants to read?",
        options: [
            { id: "A", text: "Telescope" },
            { id: "B", text: "Magnifier" },
            { id: "C", text: "Prism" },
            { id: "D", text: "Tinted lenses" }
        ],
        correctAnswer: "B",
        domain: 7 // Low Vision Rehabilitation
    },
    {
        id: 31,
        text: "What is the primary purpose of eccentric viewing training in low vision rehabilitation?",
        options: [
            { id: "A", text: "To improve peripheral vision" },
            { id: "B", text: "To teach patients to use functioning retina outside the damaged macula" },
            { id: "C", text: "To enhance contrast sensitivity" },
            { id: "D", text: "To reduce photophobia" }
        ],
        correctAnswer: "B",
        domain: 7 // Low Vision Rehabilitation
    },
    {
        id: 32,
        text: "Which of the following is NOT typically part of a comprehensive low vision evaluation?",
        options: [
            { id: "A", text: "Assessment of visual acuity" },
            { id: "B", text: "Evaluation of contrast sensitivity" },
            { id: "C", text: "Measurement of intraocular pressure" },
            { id: "D", text: "Functional vision assessment" }
        ],
        correctAnswer: "C",
        domain: 7 // Low Vision Rehabilitation
    },
    
    // Pediatrics/Binocular Vision
    {
        id: 33,
        text: "At what age should a child have their first comprehensive eye examination?",
        options: [
            { id: "A", text: "6 months" },
            { id: "B", text: "3 years" },
            { id: "C", text: "5 years" },
            { id: "D", text: "Only if symptoms are present" }
        ],
        correctAnswer: "A",
        domain: 8 // Pediatrics/Binocular Vision
    },
    {
        id: 34,
        text: "Which of the following conditions is most likely to cause amblyopia?",
        options: [
            { id: "A", text: "Conjunctivitis" },
            { id: "B", text: "Strabismus" },
            { id: "C", text: "Blepharitis" },
            { id: "D", text: "Dry eye" }
        ],
        correctAnswer: "B",
        domain: 8 // Pediatrics/Binocular Vision
    },
    {
        id: 35,
        text: "What is the critical period for treating amblyopia?",
        options: [
            { id: "A", text: "Birth to 6 months" },
            { id: "B", text: "6 months to 3 years" },
            { id: "C", text: "Birth to 8 years" },
            { id: "D", text: "There is no critical period" }
        ],
        correctAnswer: "C",
        domain: 8 // Pediatrics/Binocular Vision
    },
    {
        id: 36,
        text: "Which of the following is NOT a common treatment for accommodative esotropia?",
        options: [
            { id: "A", text: "Bifocal lenses" },
            { id: "B", text: "Full hyperopic correction" },
            { id: "C", text: "Vision therapy" },
            { id: "D", text: "Cycloplegic drugs" }
        ],
        correctAnswer: "D",
        domain: 8 // Pediatrics/Binocular Vision
    },
    
    // Vision Therapy/Rehabilitation
    {
        id: 37,
        text: "Which of the following conditions is LEAST likely to benefit from vision therapy?",
        options: [
            { id: "A", text: "Convergence insufficiency" },
            { id: "B", text: "Accommodative dysfunction" },
            { id: "C", text: "Oculomotor dysfunction" },
            { id: "D", text: "Age-related macular degeneration" }
        ],
        correctAnswer: "D",
        domain: 9 // Vision Therapy/Rehabilitation
    },
    {
        id: 38,
        text: "What is the primary goal of antisuppression therapy?",
        options: [
            { id: "A", text: "To eliminate double vision" },
            { id: "B", text: "To restore simultaneous binocular vision" },
            { id: "C", text: "To improve visual acuity" },
            { id: "D", text: "To reduce eye strain" }
        ],
        correctAnswer: "B",
        domain: 9 // Vision Therapy/Rehabilitation
    },
    {
        id: 39,
        text: "Which of the following techniques is commonly used in vision therapy for saccadic dysfunction?",
        options: [
            { id: "A", text: "Brock string" },
            { id: "B", text: "Hart chart" },
            { id: "C", text: "Vectograms" },
            { id: "D", text: "Loose prisms" }
        ],
        correctAnswer: "B",
        domain: 9 // Vision Therapy/Rehabilitation
    },
    {
        id: 40,
        text: "What is the primary purpose of yoked prisms in vision therapy?",
        options: [
            { id: "A", text: "To treat suppression" },
            { id: "B", text: "To improve fusion" },
            { id: "C", text: "To alter spatial perception" },
            { id: "D", text: "To enhance visual acuity" }
        ],
        correctAnswer: "C",
        domain: 9 // Vision Therapy/Rehabilitation
    }
];

// Generate more questions to reach 125 total
for (let i = 41; i <= 125; i++) {
    // Create questions with different domains to ensure coverage
    // Distribute questions across domains based on ABO exam percentages
    let domain;
    const rand = Math.random() * 100;
    
    if (rand < 16) {
        domain = 1; // Ametropia/Ophthalmic Optics (16%)
    } else if (rand < 28) {
        domain = 2; // Binocular Vision/Ocular Motility (12%)
    } else if (rand < 43) {
        domain = 3; // Ocular Disease (15%)
    } else if (rand < 58) {
        domain = 4; // Systemic Disease (15%)
    } else if (rand < 70) {
        domain = 5; // Contact Lenses (12%)
    } else if (rand < 82) {
        domain = 6; // Refractive Management/Functional Vision (12%)
    } else if (rand < 90) {
        domain = 7; // Low Vision Rehabilitation (8%)
    } else if (rand < 95) {
        domain = 8; // Pediatrics/Binocular Vision (5%)
    } else {
        domain = 9; // Vision Therapy/Rehabilitation (5%)
    }
    
    const domainNames = {
        1: "Ametropia/Ophthalmic Optics",
        2: "Binocular Vision/Ocular Motility",
        3: "Ocular Disease",
        4: "Systemic Disease",
        5: "Contact Lenses",
        6: "Refractive Management/Functional Vision",
        7: "Low Vision Rehabilitation",
        8: "Pediatrics/Binocular Vision",
        9: "Vision Therapy/Rehabilitation"
    };
    
    questionData.push({
        id: i,
        text: `Sample question ${i} for domain: ${domainNames[domain]}. This is a placeholder that would be replaced with actual ABO exam content.`,
        options: [
            { id: "A", text: `Option A for question ${i}` },
            { id: "B", text: `Option B for question ${i}` },
            { id: "C", text: `Option C for question ${i}` },
            { id: "D", text: `Option D for question ${i}` }
        ],
        correctAnswer: ["A", "B", "C", "D"][Math.floor(Math.random() * 4)],
        domain: domain
    });
}
