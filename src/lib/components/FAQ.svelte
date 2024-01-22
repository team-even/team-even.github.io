<script>
    import SectionWrapper from "$lib/components/SectionWrapper.svelte";
    import * as Accordion from "$lib/components/ui/accordion";
    import AccordionContent from "./ui/accordion/accordion-content.svelte";
    import AccordionTrigger from "./ui/accordion/accordion-trigger.svelte";
</script>

<section class="p-40 font-body text-2xl">
<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>What is EVEN?</Accordion.Trigger>
    <Accordion.Content>
        An AI integrated workspace that helps you maintain a healthy balance between work and sanity.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is it free?</Accordion.Trigger>
    <Accordion.Content>
        Well... pricing may very.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
</section>