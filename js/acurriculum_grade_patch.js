curriculum_grade_patch.js// Curriculum Grade Patch for KTL Test
// Adds new modules and updates existing ones with full content from FULL_CURRICULUM_CONTENT

(function() {
  // Wait for CURRICULUM and FULL_CURRICULUM_CONTENT to be defined
  const checkAndPatch = setInterval(() => {
    if (typeof CURRICULUM !== 'undefined' && typeof FULL_CURRICULUM_CONTENT !== 'undefined') {
      clearInterval(checkAndPatch);
      applyGradePatch();
    }
  }, 100);

  function applyGradePatch() {
    const modules = CURRICULUM.allModules || CURRICULUM.modules || [];

    // Define module metadata for new modules
    const MODULE_METADATA = {
      'mod_negative_intro': {
        name_kz: 'Теріс сандар кіріспесі',
        name_ru: 'Введение в отрицательные числа',
        grade: 5,
        icon: 'fa-minus-circle'
      },
      'mod_scale': {
        name_kz: 'Масштаб',
        name_ru: 'Масштаб',
        grade: 5,
        icon: 'fa-expand'
      },
      'mod_number_tricks': {
        name_kz: 'Сандарды есептеу трюктері',
        name_ru: 'Трюки вычислений с числами',
        grade: 5,
        icon: 'fa-magic'
      },
      'mod_ktl_special': {
        name_kz: 'КТЛ арнайы модуль',
        name_ru: 'Специальный модуль КТЛ',
        grade: 6,
        icon: 'fa-star'
      }
    };

    // Process each module ID in FULL_CURRICULUM_CONTENT
    for (const moduleId in FULL_CURRICULUM_CONTENT) {
      if (!FULL_CURRICULUM_CONTENT.hasOwnProperty(moduleId)) continue;

      const topics = FULL_CURRICULUM_CONTENT[moduleId];
      const existingModule = modules.find(m => m.id === moduleId);

      if (existingModule) {
        // Update existing module with new topics
        existingModule.topics = topics;
      } else {
        // Create new module if it doesn't exist
        const metadata = MODULE_METADATA[moduleId];
        if (metadata) {
          const newModule = {
            id: moduleId,
            name_kz: metadata.name_kz,
            name_ru: metadata.name_ru,
            grade: metadata.grade,
            icon: metadata.icon,
            topics: topics
          };
          modules.push(newModule);
        }
      }
    }

    // Ensure allModules or modules is updated
    if (CURRICULUM.allModules) {
      CURRICULUM.allModules = modules;
    } else if (CURRICULUM.modules) {
      CURRICULUM.modules = modules;
    }

    console.log('Grade patch applied successfully. Total modules:', modules.length);

    // Trigger re-render if available
    if (typeof renderModuleGrid === 'function') {
      renderModuleGrid();
    }

    // Dispatch custom event for other listeners
    document.dispatchEvent(new CustomEvent('curriculumUpdated', { detail: { modules } }));
  }
})();
