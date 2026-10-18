(() => {
  'use strict';

  const projectDetails = {
    analytics: {
      title: 'Northstar Analytics',
      summary: 'A business intelligence dashboard for teams that need a clearer view of performance.',
      problem: 'Important metrics were spread across disconnected spreadsheets, making reporting slow and inconsistent.',
      solution: 'We designed a responsive dashboard with a unified data view, clear visualizations, and role-based access.',
      result: 'Teams gained a shared source of truth and a faster way to spot trends and make decisions.'
    },
    mobile: {
      title: 'Fieldwork Mobile',
      summary: 'A mobile-first workspace for a distributed operations team.',
      problem: 'Field staff relied on paper notes and delayed updates, creating avoidable coordination gaps.',
      solution: 'We built a simple mobile experience for task assignments, status updates, and essential field information.',
      result: 'The team could coordinate work in real time and spend less time chasing updates.'
    },
    cloud: {
      title: 'Cloudline Platform',
      summary: 'A more reliable deployment and monitoring foundation for a growing digital product.',
      problem: 'Manual releases and limited visibility made deployments stressful and troubleshooting slow.',
      solution: 'We introduced repeatable deployment pipelines, monitoring, and practical operational alerts.',
      result: 'Releases became more consistent, while the team gained earlier visibility into potential issues.'
    }
  };

  const projectModal = document.getElementById('projectModal');
  projectModal?.addEventListener('show.bs.modal', (event) => {
    const trigger = event.relatedTarget;
    const key = trigger?.getAttribute('data-project');
    const project = projectDetails[key];
    if (!project) return;
    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalSummary').textContent = project.summary;
    document.getElementById('projectProblem').textContent = project.problem;
    document.getElementById('projectSolution').textContent = project.solution;
    document.getElementById('projectResult').textContent = project.result;
  });

  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      const firstInvalid = form.querySelector(':invalid');
      firstInvalid?.focus();
      success?.classList.add('d-none');
      return;
    }

    form.classList.add('was-validated');
    success?.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    success?.focus();
  });

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  document.querySelectorAll('#navbarContent .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navbarContent');
      if (collapse?.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    });
  });
})();
