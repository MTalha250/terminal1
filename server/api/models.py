from django.db import models


class Inquiry(models.Model):
    """Stores contact enquiries from the website contact form."""

    class AudienceType(models.TextChoices):
        CUSTOMER_INQUIRY = "customer_inquiry", "Customer Inquiry"
        GENERAL_QUESTION = "general_question", "General Question"
        OTHER_INQUIRY = "other_inquiry", "Other Inquiry"
        PARTNERSHIP = "partnership", "Partnership Opportunity"
        FEEDBACK = "feedback", "Feedback Request"

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    service = models.CharField(max_length=120, blank=True)
    audience_type = models.CharField(
        max_length=32, choices=AudienceType.choices, default=AudienceType.CUSTOMER_INQUIRY
    )
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:  # pragma: no cover - simple representation
        return f"{self.first_name} {self.last_name} - {self.email}"

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Inquiry"
        verbose_name_plural = "Inquiries"
