// builds a Google Drive thumbnail URL from a file ID
const img = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: string;
  wide?: boolean;
  exclude?: boolean;
}

const raw: GalleryPhoto[] = [

  // --- Ambience ---
  { src: img('1zKQ9i-DmKEd4lmr8tZBOnstgMgaoRB8t'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience', wide: true },
  { src: img('1Uf6A2CEPv0mUQZzy89Nuxmi03Is8US8E'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('10HGCrugUUwGp0ISeh41aMOUOUQcqsUIR'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1F3qxbopOEHdmczmIn9yjoPx0HBEiEyN5'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1LVgCKdz8oCwUqWHYuRTUNLs3PBbva6Ro'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('167Vt_h2yBczFMvp4obzwpUqqPi2TQMHY'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1LoZyYkZ6VrYY9sQW706_pmJ2plddRUAE'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1EAGkNX-4TRGfYLkwOleYBPGk7LNErZFX'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1EhNt6I9apbuTxgeFgKguumdFBOs_rW2k'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1TCAdpYMlWz0QRRY6YnIa3YGVn2WvVilm'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1i7vtmzaRdrDPoqGBvFW0Nvj0RH7M1LbI'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1yGMRxY7MR50co4qQDLZ6au47OCVqqP-p'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1J72B5lhXIbMzsyEL9G5ZQDdz4emB8-rv'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1nzBKy5bQZzryWohY_HAniEZ2nBSb6txr'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1K1eIzDghgGyKb8-KFwSLvPyaz2ksFuSP'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1r5EFB6dTAFpfo2NmNiS-7S7tAmOsbRNo'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1Wzgtxtnjq7KMNUwC3GlUqqocHEu_NqlH'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1-2ZTmpTOv9BBmbQ7WeFpHAMFoklGJYFg'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1DyijiNmgs2MeKd2LunI7qys2nDyiPRq4'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1E0icO7xipwemZDgzzRXfmI667eNJQNun'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1Rlj9voGmOucAPK5SIc5Cma3sE_vRhIr9'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1gHlNgXqs6BVcB945CsS-t7RQ_gs6W1TN'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1OvuVoVL74G0PwOsmYHiyzW56knsHo9M5'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1wwzW_tShege3OL8V1uX_vk2mLhXIroZO'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('11Pn6Vv_6ktisHbwFpwYnIm9gfzO2JtJS'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('17jYWP78PlN6Wo6krNQGRC5WGhE1t2hJV'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1LWzbsXUeK2Mi9K-bf53rzB9SebxiA2nW'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1HHpGU8fM1UI7lYJVSmu5ayKe5orFWI8Z'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1woswx8_6hHaG8SoWCujYbe_7M4veGEdB'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },
  { src: img('1KuYXZdoRBc5qkwk-MvEddkPbRjCg7prT'), alt: 'Ambience at D\'karang Eco Lodge', category: 'Ambience' },

  // --- Classic Garden Room ---
  { src: img('1cUGtS2Ntbi-DFINaZ6MO1xqH0tDi9kiX'), alt: 'Classic Garden Room', category: 'Classic Garden Room', wide: true },
  { src: img('1ynj0FlpM-pmvyisu2HnD_0IgCMGVLi1i'), alt: 'Classic Garden Room', category: 'Classic Garden Room' },
  { src: img('1ekZ-KlGsEjsqFjDQDAc-dP5VKTO01Kz1'), alt: 'Classic Garden Room', category: 'Classic Garden Room' },
  { src: img('1FxAkj0V1TCoU44QbYpuxbHaGJMqn8X_T'), alt: 'Classic Garden Room', category: 'Classic Garden Room' },
  { src: img('1vIKeoOLlVEqPJQP-BsrHF3ttXyJLaFcx'), alt: 'Classic Garden Room', category: 'Classic Garden Room' },
  { src: img('1h4lWlhUJjU6wQSESgy8UWL9hPFP-pD4f'), alt: 'Classic Garden Room', category: 'Classic Garden Room' },
  { src: img('1Jp5shjp9x6hLafv-DThtq2gxryI6u4Oh'), alt: 'Classic Garden Room', category: 'Classic Garden Room' },
  { src: img('1dqVx-uw_AsX1ydKNOYVvOH9BmTGQJ8aU'), alt: 'Classic Garden Room', category: 'Classic Garden Room' },

  // --- D'karang Eco Lodge ---
  { src: img('10hllh3S-M6TuTNpdtjZN6yQpmEbJ3IQO'), alt: 'D\'karang Eco Lodge', category: 'D\'karang Eco Lodge', wide: true },

  // --- Experiences ---
  { src: img('19yLUphDFbJPIeBPSiaYQthsHUiL1rom8'), alt: 'Experiences at D\'karang', category: 'Experiences', wide: true },
  { src: img('1R7Junnw5DATSOlk8Vvcf-l5DqguONPH0'), alt: 'Experiences at D\'karang', category: 'Experiences' },
  { src: img('1JFivKEcYgtseGLwf39p6U5tilmRIJ-YQ'), alt: 'Experiences at D\'karang', category: 'Experiences' },
  { src: img('1TtZPzSj6WGAumo887thX8QS4nj0PoFs7'), alt: 'Experiences at D\'karang', category: 'Experiences' },
  { src: img('1os-R78tvwRwfHfInXz3dMAIWfBgtsgDz'), alt: 'Experiences at D\'karang', category: 'Experiences' },
  { src: img('1tKk7F3K5pJ-nZ4okndwYTaOTGQ4h-rig'), alt: 'Experiences at D\'karang', category: 'Experiences' },
  { src: img('1BcgLPJtmbz8ZV52xOIEK0-hda7KRWKgU'), alt: 'Experiences at D\'karang', category: 'Experiences' },
  { src: img('1wZ71hfEXvcIw1sYN8TLpSdXMDsFYf3nd'), alt: 'Experiences at D\'karang', category: 'Experiences' },
  { src: img('1110hd77adDMU8u0k4lb89y5Xm4gq31mM'), alt: 'Experiences at D\'karang', category: 'Experiences' },

  // --- Harmony Garden View Room ---
  { src: img('1dr0axmCeS3pHw4zD3WsFLugpylITd4Yi'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room', wide: true },
  { src: img('1QCkJUvt4lIdbkLxIquKuxaN11jPVOUqC'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1Kcjmpn8Pci-NVq0J-hFfa9XoWDkuUDz4'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1G57mIRdmInIj5uyA15XkAyy-RX5dKVFs'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1YmjsDj5o9vNaMmX3NpP2n6WTETclh7V4'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1NfwzPIjPYvS_JD_ULjDbTI0MrFcpiQcc'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1IPcrgHQGovDrPxMd0fWSpJklqaqeundh'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1JNBO3hu7LxqiOrk15t6H3Mrv2MDzYzBL'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1QB22qh1cgNjQOVTmTQk0N-QK2wtcfQqY'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1P4RX_u4S1Pbv8_ZrWY1LuarlygLizP9U'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1CueVHCZUIwLzX7Shon_c-2B4W56FppdB'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1a__ug5pMEwpCQe_q11G0jLddV8echg9F'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },
  { src: img('1AWfG3NEo9dByp8GCYH2O7j4KGHxLF8RT'), alt: 'Harmony Garden View Room', category: 'Harmony Garden View Room' },

  // --- Heritage Pool View Room ---
  { src: img('1QLgm7q-V49tzS4wdG_VQFdcd2t3MkOfd'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room', wide: true },
  { src: img('1DycXFoZ1-fSUe7U_5goqOpELmu0n49wh'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1h7fEyYx5HUD3NcnaF94ECyTwfA_nNWg1'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1NBCX_umCSpMcrFs4GoCd6l0ZTn5_X281'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1SuaudXOYmfI2SkYHOX9owlweZAkkVHRc'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1I4JXuboAxB-J--r_rxOs6LmrFPKze9Xh'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1R9alTTFICptnzejXGQPowzcEmyYBFscN'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1Wt_zETCwgevu0rob0k1bmwIHuTtFt7RO'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1_V7nKZmWrIrD0GyKHbcwif8zd-rSwBDW'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('11Q7W_GugMHacqsHg7cQwXvEezHWMeAH3'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1gcjzPeIPXLlBPfN3pucuE901WQcGjwAU'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },
  { src: img('1MPpOyHKJ6f_c0DniyYPkB2Ta4vwILDBL'), alt: 'Heritage Pool View Room', category: 'Heritage Pool View Room' },

  // --- Tropical Garden View Room ---
  { src: img('1k3M-ADoJ8ZXZfuWRF2lGXT9im2O_qlST'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room', wide: true },
  { src: img('1zPH_sk2ThJg-B6TuNamlj9SE-81FFPOp'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('1J_2jJp-ZANeUP6ocJtIYBifATFwdYU72'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('1wfOS8hVeBYz2-t6-Qzik42iOc6VtY3m9'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('1Axpq0zqeLUv8rLUfI39HDUhUxg8bUGLL'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('12JaeEVwAV0AzYTp3YAy7wL4dGG53fXTo'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('1w2NDrK4TA1aw-GWwuxsPhYzVUoLc-QqW'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('1iUorgUMvwWs8I8A-DI01DuZqO2UKLcn8'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('1aCEQQzZEkUiogfpBUKuNXC7roFgGKzTo'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('1cjKACAJR7BSx75OeGMVB6d5T8jwAJwMc'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },
  { src: img('180bn_8vYcCWXCxDJhbYSvWEgfa3cTklr'), alt: 'Tropical Garden View Room', category: 'Tropical Garden View Room' },

  // --- Tropical Pool View Room ---
  { src: img('12FG4RkVwRH5Nr6M6Omu0BTngAoysokWP'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room', wide: true },
  { src: img('1R8S-YcBo6i7kzUj0VQJir5blKl_cgVlU'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1egGuzwqEJhY0w2NEct6mZP8JT6F2R1j3'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1QivQQsTq3OzzwS-Vgvp5RkuunEEjmZMB'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1UKYFzykbNmmzpE7hLFpANsBPgzKVt2N4'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1mSFSJhxaF-OT1RC2BZQw1GcxxxrimOPA'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1835jv-Pdgwv8ESMft1lJ0Fmjhmu0nnkH'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1Y0aZ7b3Oa-ApTOuDXWaDRKgEBYY9Fv32'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1j0E8PaDdYRIivCv_SFoj8sNLd4UqayyM'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1IDPqW1z5-LagEYUXe39LLpvO6g4Qaayw'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('17CZfvRT6vhY_XOOjtMQardzWzD3Z5vPs'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1TUjbGcmifltzaqweIqwtSB1yrlgRAvSH'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },
  { src: img('1fEnwGrJXHvKo8nn6AB9KOBRKDX0oJgsH'), alt: 'Tropical Pool View Room', category: 'Tropical Pool View Room' },

];

export const photos = raw.filter((p) => !p.exclude);

export const categories = ['All', ...Array.from(new Set(raw.filter((p) => !p.exclude).map((p) => p.category)))];
