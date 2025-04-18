import { Application } from '../types/application';
import { ApplicationStatus } from '../types/application';
import { db } from '../config/database';
import { applicationRepository } from '../repositories/application.repository';

describe('Application Repository', () => {
  beforeAll(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  describe('createApplication', () => {
    it('should create a new application', async () => {
      const application: Partial<Application> = {
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      };

      const result = await applicationRepository.createApplication(application);
      expect(result).toBeDefined();
      expect(result.user_id).toBe(application.user_id);
      expect(result.job_id).toBe(application.job_id);
      expect(result.cover_letter).toBe(application.cover_letter);
      expect(result.status).toBe(application.status);
    });
  });

  describe('getApplicationById', () => {
    it('should return an application by id', async () => {
      const application = await applicationRepository.getApplicationById(1);
      expect(application).toBeDefined();
      expect(application?.id).toBe(1);
    });

    it('should return null for non-existent application', async () => {
      const application = await applicationRepository.getApplicationById(999);
      expect(application).toBeNull();
    });
  });

  describe('getUserApplications', () => {
    it('should return applications for a user', async () => {
      const applications = await applicationRepository.getUserApplications(1);
      expect(applications).toBeDefined();
      expect(applications.length).toBeGreaterThan(0);
      expect(applications[0].user_id).toBe(1);
    });
  });

  describe('getJobApplications', () => {
    it('should return applications for a job', async () => {
      const applications = await applicationRepository.getJobApplications(1);
      expect(applications).toBeDefined();
      expect(applications.length).toBeGreaterThan(0);
      expect(applications[0].job_id).toBe(1);
    });
  });

  describe('updateApplication', () => {
    it('should update an application', async () => {
      const updateData: Partial<Application> = {
        status: ApplicationStatus.REVIEWED
      };

      const result = await applicationRepository.updateApplication(1, updateData);
      expect(result).toBeDefined();
      expect(result.status).toBe(ApplicationStatus.REVIEWED);
    });
  });

  describe('verifyApplicationOwnership', () => {
    it('should return true for application owner', async () => {
      const isOwner = await applicationRepository.verifyApplicationOwnership(1, 1);
      expect(isOwner).toBe(true);
    });

    it('should return false for non-owner', async () => {
      const isOwner = await applicationRepository.verifyApplicationOwnership(1, 2);
      expect(isOwner).toBe(false);
    });
  });

  describe('verifyJobOwnership', () => {
    it('should return true for job owner', async () => {
      const isOwner = await applicationRepository.verifyJobOwnership(1, 1);
      expect(isOwner).toBe(true);
    });

    it('should return false for non-owner', async () => {
      const isOwner = await applicationRepository.verifyJobOwnership(1, 2);
      expect(isOwner).toBe(false);
    });
  });
}); 